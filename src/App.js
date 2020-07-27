import React, {useState, useEffect} from 'react'
import AddCategory from "./components/UseCases/AddCategory";
import EditCategory from "./components/UseCases/EditCategory";
import GetCategory from "./components/tables/GetCategory";
import {getAllCategories,postCategories,deleteCategories,putCategories} from "./apis/categories/categoriesApi";


const App = () => {

    const categoriesData = [
        {
            categories_id: "C000",
            categories_desc: "Normal",
            categories_price: "0",
            categories_status: "A",
            price_date: "2020-07-07 00:00:00"
        },
        {
            categories_id: "C001",
            categories_desc: "Extra Pedas",
            categories_price: "3500",
            categories_status: "A",
            price_date: "2020-07-08 18:14:54"
        },
        {
            categories_id: "C002",
            categories_desc: "Pedas Manis",
            categories_price: "2000",
            categories_status: "I",
            price_date: "2020-07-08 00:00:00"
        },
        {
            categories_id: "C003",
            categories_desc: "Super Pedas",
            categories_price: "4500",
            categories_status: "A",
            price_date: "2020-07-08 18:32:00"
        },
    ] //default value if server not connected | Run execEwarungAPI for API

    const initialFormState = {
        categories_id: '',
        categories_desc: '',
        categories_price: '',
        categories_status: '',
        price_date: ''

    }

    const [categories, setCategories] = useState(categoriesData)
    const [currentCategories, setCurrentCategories] = useState(initialFormState)
    const [editing, setEditing] = useState(false)

    const addCategory = category => {
        setCategories([...categories, category])
        postCategories(category)
            .then((categories) => {
                console.log(categories)
            })
            .catch((e) => {
                console.log(e);
            });

    }

    const deleteCategory = id => {
        setEditing(false)
        setCategories(categories.filter(category => category.categories_id !== id))
        deleteCategories(id)
            .then((categories) => {
                console.log(categories)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const updateCategory = (id, updateCategories) => {
        setEditing(false)
        setCategories(categories.map(category => (category.categories_id === id ? updateCategories : category)))
        deleteCategories(updateCategories)
            .then((updateCategories) => {
                console.log(updateCategories)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const editRow = category => {
        setEditing(true)

        setCurrentCategories({
            categories_id: category.categories_id,
            categories_desc: category.categories_desc,
            categories_price: category.categories_price,
            categories_status: category.categories_status,
            price_date: category.price_date
        })
    }
;


    useEffect(()=>{
        getAllCategories()
            .then((categories) => {
                console.log(categories)
                setCategories(categories)
            })
            .catch((e) => {
                console.log(e);
            });
    },[])

    return (
        <div className="container">
            <h1 style={{
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 30
            }}>[RJS-A05.C02]CRUD Hooks</h1>
            <div className="row">
                <div className="col">
                    {editing ? (
                        <div>
                            <EditCategory
                                editing={editing}
                                setEditing={setEditing}
                                currentCategories={currentCategories}
                                updateCategories={updateCategory}
                            />
                        </div>
                    ) : (
                        <div>
                            <AddCategory addCategory={addCategory}/>
                        </div>
                    )}
                </div>
                <div className="container">
                    <GetCategory categories={categories} editRow={editRow} deleteCategory={deleteCategory}/>
                </div>
            </div>
        </div>
    )
}

export default App;
