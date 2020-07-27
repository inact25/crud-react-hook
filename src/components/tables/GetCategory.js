import React from 'react'

const GetCategory = props => (
    <div className='container'>
        <div className='row' style={{
            marginTop: 30,
            marginBottom: 30
        }}>
            <div className='col'>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Latest Update</th>
                        <th>Action</th>


                    </tr>
                    </thead>
                    <tbody>
                    {props.categories.length > 0 ? (
                        props.categories.map(category => (
                            <tr key={category.categories_id}>
                                <td>{category.categories_id}</td>
                                <td>{category.categories_desc}</td>
                                <td>{category.categories_status}</td>
                                <td>{category.categories_price}</td>
                                <td>{category.price_date}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            props.editRow(category)
                                        }}
                                        className="btn btn-outline-primary"
                                    >
                                        Edit
                                    </button>
                                    <span style={{margin: 5}}/>
                                    <button
                                        onClick={() => props.deleteCategory(category.categories_id)}
                                        className="btn btn-outline-danger"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} style={{
                                textAlign:'center'
                            }}>No Data</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
)

export default GetCategory
