import React, { Component } from 'react';
import './PersonalInfoForm.css';
import Button from './components/form/Button';
import TextField from './components/form/TextField';
import Form from './components/form/Form';
import ComboBox from './components/form/ComboBox';
import Api from './api'

class PersonalInfoForm extends Component {
  state = {
    form: {
      // height: '',
      // weight: '',
      // zipcode: '',
      // gender: '',
      // dob: '',
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (!name) {
      console.error(target.type + " does not have a name set ");
      return
    }

    let form = this.state.form
    form[name] = value

    this.setState({form:form});
  }

  validate = () => {
    var {height, weight, zipcode, gender, dob} = this.state.form

    // TODO: validate per component
    if (!height)
      return false
    if (!weight)
      return false
    if (!zipcode)
      return false
    if (!gender)
      return false
    if (!dob)
      return false
    return true
  }

  submit = (event) => {
    event.preventDefault();
    if (this.validate()) {
      console.log(this.state.form)
      Api.exampleSubmit(this.state.form).then(data => {
        console.log(data)
      })
    }
    return false
  }

  render() {
    return (
      <div className='container fill-height'>
        <div className='header center-text'>
          <h2>Vital Information for Improved Health</h2>
          <h6>Please complete your personal information so that we can customize your experience</h6>
        </div>
        <Form onSubmit={this.submit}>
          <div className='col-xs-12'>
            <div className='row center-xs'>
              <div className='col-xs-12 col-sm-4'>
                <TextField name='height'
                onChange={this.handleChange}
                label='Height'
                required
                placeholder='ft'
                format={{
                  numeral: true,
                  numeralPositiveOnly: true,
                  numeralIntegerScale: 1
                }}>
                </TextField>
              </div>
              <div className='col-xs-12 col-sm-4'>
                <TextField name='weight'
                onChange={this.handleChange}
                label='Weight'
                required
                placeholder='lbs'
                format={{
                  numeral: true,
                  numeralPositiveOnly: true,
                  numeralIntegerScale: 4
                }}>
                </TextField>
              </div>
              <div className='col-xs-12 col-sm-4'>
                <TextField name='zipcode'
                onChange={this.handleChange}
                label='Zip Code'
                required
                placeholder='10036'
                format={{numericOnly: true}}>
                </TextField>
              </div>
              <div className='col-xs-12 col-sm-4'>
                <ComboBox name='gender'
                onChange={this.handleChange}
                label='Gender'
                required
                items={['Male', 'Female', 'Other']}>
                </ComboBox>
              </div>
              <div className='col-xs-12 col-sm-4'>
                <TextField name='dob'
                onChange={this.handleChange}
                label='Date of Birth'
                required
                centered
                placeholder='MM - DD - YY'
                format={{
                  date: true,
                  datePattern: ['m','d','y'],
                  delimiter: ' - '
                }}>
                </TextField>
              </div>
            </div>
            <br/>
            <div className='col-xs-offset-4 col-xs-4'>
              <Button onClick={this.submit}>Next</Button>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default PersonalInfoForm;
