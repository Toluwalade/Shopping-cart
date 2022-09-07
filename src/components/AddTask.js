import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component {
    state = {
        desc: ""
    }
    render() {
        return (
            <div className='row mt-3'>
                <div className='col-md-10'>
                    <input
                        className='form-control'
                        type='text'
                        onChange={(e) => {

                            this.setState({ desc: e.target.value })
                        }}
                    />


                </div>
                <div className='col-md-2'>
                    <button className='btn btn-light' onClick={() =>
                        this.props.handleAdd({
                            id: Date.now(),
                            description: this.state.desc,
                            done: false,
                        })
                    }><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>
        );
    }
}

AddTask.propTypes = {
    handleAdd: PropTypes.func,
};

export default AddTask;
