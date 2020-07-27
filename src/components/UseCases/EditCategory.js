import React, {useEffect, useState} from 'react'

const EditCategory = props => {
    const [category, setCategory] = useState(props.currentCategories)

    useEffect(
        () => {
            setCategory(props.currentCategories)
        },
        [props]
    )

    const handleInputChange = event => {
        const {name, value} = event.target

        setCategory({...category, [name]: value})
    }

    return (
        <div className='container'>
            <form
                onSubmit={event => {
                    event.preventDefault()

                    props.updateCategories(category.categories_id, category)
                }}
            >
                <div className='row'>
                    <div className='col-6'>
                        <input disabled className='form-control' placeholder='Category ID' type="text" name="categories_id"
                               value={category.categories_id}
                               onChange={handleInputChange}/>
                    </div>
                    <div className='col-6'>
                        <input className='form-control' placeholder='Name' type="text" name="categories_desc"
                               value={category.categories_desc}
                               onChange={handleInputChange}/>
                    </div>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30
                    }}/>
                    <div className='col-6'>
                        <input className='form-control' placeholder='Status (A/I)' type="text" name="categories_status" value={category.categories_status}
                               onChange={handleInputChange}/>
                    </div>
                    <div className='col-6'>
                        <input className='form-control' placeholder='Price' type="number" name="categories_price" value={category.categories_price}
                               onChange={handleInputChange}/>
                    </div>
                    <div style={{
                        marginTop: 30,
                        marginBottom: 30
                    }}/>
                    <div className='col-6'>
                        <button className='btn btn-outline-primary btn-block'>Update Category</button>
                    </div>
                    <div className='col-6'>
                        <button onClick={() => props.setEditing(false)} className='btn btn-outline-danger btn-block'>
                            Cancel
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EditCategory
