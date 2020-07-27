import React, {useState} from 'react'

const AddCategory = props => {
    const initialFormState = {
        categories_id: '',
        categories_desc: '',
        categories_price: '',
        categories_status: '',
        price_date: ''
    }
    const [category, setCategory] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target
        setCategory({...category, [name]: value})
    }

    return (
        <div className='container'>
            <form
                onSubmit={event => {
                    event.preventDefault()
                    props.addCategory(category)
                    setCategory(initialFormState)
                }}
            >
                <div className='row'>
                    <div className='col-6'>
                        <input required className='form-control' placeholder='Category ID' type="text" name="categories_id"
                               value={category.categories_id}
                               onChange={handleInputChange}/>
                    </div>
                    <div className='col-6'>
                        <input required className='form-control' placeholder='Name' type="text" name="categories_desc"
                               value={category.categories_desc}
                               onChange={handleInputChange}/>
                    </div>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30
                    }}/>
                    <div className='col-6'>
                        <input required className='form-control' placeholder='Status (A/I)' type="text" name="categories_status" value={category.categories_status}
                               onChange={handleInputChange}/>
                    </div>
                    <div className='col-6'>
                        <input required className='form-control' placeholder='Price' type="number" name="categories_price" value={category.categories_price}
                               onChange={handleInputChange}/>
                    </div>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30
                    }}/>
                    <div className='col'>
                        <button className='btn btn-outline-primary btn-block'>Add new Category</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddCategory
