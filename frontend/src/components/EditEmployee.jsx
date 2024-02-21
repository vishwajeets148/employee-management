import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
    const {id} = useParams()
    const [employee, setEmployee] = useState({
        employee_id:"",
        name: "",
        // date_of_birth: "",
        mobile_no:"",
        alternate_no: "",
        city:"",
        email: "",
        postal_code:"",
        // password: "",
        qualification: "",
        year_of_experience:"",
        start_date:"",
        end_date:"",
        // gender:"",
        // marital_status:"",
        address: "",
        department_id: "",
        salary:""
      });
      const [department, setDepartment] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:5000/auth/department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:5000/auth/employee/'+id)
        .then(result => {
            setEmployee({
                ...employee,
                employee_id: result.data.Result[0].employee_id,
                name: result.data.Result[0].name,
                // date_of_birth: result.data.Result[0].date_of_birth,
                mobile_no: result.data.Result[0].mobile_no,
                alternate_no: result.data.Result[0].alternate_no,
                city: result.data.Result[0].city,
                email: result.data.Result[0].email,
                address: result.data.Result[0].address,
                postal_code: result.data.Result[0].postal_code,
                department_id: result.data.Result[0].department_id,
                qualification: result.data.Result[0].qualification,
                // password: result.data.Result[0].password,
                year_of_experience: result.data.Result[0].year_of_experience,
                start_date: result.data.Result[0].start_date,
                end_date: result.data.Result[0].end_date,
                salary: result.data.Result[0].salary,
                // gender: result.data.Result[0].gender,
                // marital_status: result.data.Result[0].marital_status,
             
            })
        }).catch(err => console.log(err))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/auth/edit_employee/'+id, employee)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/employee')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
    <div className="p-3 rounded w-50 border">
      <h3 className="text-center">Edit Employee</h3>
      <form className="row g-1" onSubmit={handleSubmit}>
      <div className="col-12">
          <label for="inputName" className="form-label">
            Employee Id
          </label>
          <input
            type="number"
            className="form-control rounded-0"
            id="inputEmployeeId"
            placeholder="Employee Id"
            value={employee.employee_id}
            onChange={(e) =>
              setEmployee({ ...employee, employee_id: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputName"
            placeholder="Enter Name"
            value={employee.name}
            onChange={(e) =>
              setEmployee({ ...employee, name: e.target.value })
            }
          />
        </div>
        {/* <div className="col-12">
          <label for="inputdob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control rounded-0"
            id="inputdob"
            placeholder="Enter Name"
            value={employee.date_of_birth}
            onChange={(e) =>
              setEmployee({ ...employee, date_of_birth: e.target.value })
            }
          />
        </div> */}
        <div className="col-12">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control rounded-0"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
          />
        </div>
        {/* <div className="col-12">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-0"
            id="inputPassword4"
            placeholder="Enter Password"
            value={employee.password}
            onChange={(e) =>
              setEmployee({ ...employee, password: e.target.value })
            }
          /> */}
          <div className="col-12">
          <label for="inputSalary" className="form-label">
            Salary
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputSalary"
            placeholder="Enter Salary"
            autoComplete="off"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputMobile" className="form-label">
            Mobile No
          </label>
          <input
            type="tel"
            className="form-control rounded-0"
            id="inputMobile"
            placeholder="Enter Mobile no"
            autoComplete="off"
            value={employee.mobile_no}
            onChange={(e) =>
              setEmployee({ ...employee, mobile_no: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputAlternateno" className="form-label">
            Alternate No
          </label>
          <input
            type="tel"
            className="form-control rounded-0"
            id="inputAlternateno"
            placeholder="Enter Alternate no"
            autoComplete="off"
            value={employee.alternate_no}
            onChange={(e) =>
              setEmployee({ ...employee, alternate_no: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputAlternateno" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputCity"
            placeholder="Enter City"
            autoComplete="off"
            value={employee.city}
            onChange={(e) =>
              setEmployee({ ...employee, city: e.target.value })
            }
          />
        </div>
        
        
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputAddress"
            placeholder="1234 Main St"
            autoComplete="off"
            value={employee.address}
            onChange={(e) =>
              setEmployee({ ...employee, address: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputPostal" className="form-label">
            Postal Code
          </label>
          <input
            type="number"
            className="form-control rounded-0"
            id="inputPostal"
            placeholder="832659"
            autoComplete="off"
            value={employee.postal_code}
            onChange={(e) =>
              setEmployee({ ...employee, postal_code: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputQualification" className="form-label">
            Qualification
          </label>
          <input
            type="text"
            className="form-control rounded-0"
            id="inputQualification"
            placeholder="Qualification"
            autoComplete="off"
            value={employee.qualification}
            onChange={(e) =>
              setEmployee({ ...employee, qualification: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputQualification" className="form-label">
            Years of Experience
          </label>
          <input
            type="number"
            className="form-control rounded-0"
            id="inputYearsOFExperience"
            placeholder=" Years of Experience"
            autoComplete="off"
            value={employee.year_of_experience}
            onChange={(e) =>
              setEmployee({ ...employee, year_of_experience: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputQualification" className="form-label">
          Date of Joining
          </label>
          <input
            type="date"
            className="form-control rounded-0"
            id="inputDateofJoining"
            placeholder="Date of Joining"
            autoComplete="off"
            value={employee.start_date}
            onChange={(e) =>
              setEmployee({ ...employee, start_date: e.target.value })
            }
          />
        </div>
        <div className="col-12">
          <label for="inputQualification" className="form-label">
          Leave date
          </label>
          <input
            type="date"
            className="form-control rounded-0"
            id="inputLeavedate"
            placeholder="Leave date"
            autoComplete="off"
            value={employee.end_date}
            onChange={(e) =>
              setEmployee({ ...employee, end_date: e.target.value })
            }
          />
        </div>
        {/* <div className="col-12">
          <label for="inputQualification" className="form-label">
          Gender
          </label> */}
          {/* <input
            type="text"
            className="form-control rounded-0"
            id="inputgender"
            placeholder="Gender"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, gender: e.target.value })
            }
          /> */}
          {/* <select className="form-control rounded-0" id="gender"    value={employee.gender}  placeholder="Gender"  onChange={(e) =>
              setEmployee({ ...employee, gender: e.target.value })} >
                                              <option value="">Select Gender</option>
                                              <option value="Male">Male</option>
                                              <option value="Female">Female</option>
                                         
                                          </select>
        </div> */}
        {/* <div className="col-12">
          <label for="inputQualification" className="form-label">
          Marital status
          </label> */}
          {/* <input
            type="text"
            className="form-control rounded-0"
            id="inputMaritastatus"
            placeholder="Marital status"
            autoComplete="off"
            onChange={(e) =>
              setEmployee({ ...employee, marital_status: e.target.value })
            }
            /> */}
            {/* <select className="form-control rounded-0" id="martial"  placeholder="Marital status" value={employee.marital_status}   onChange={(e) =>
              setEmployee({ ...employee, marital_status: e.target.value })} >
                                              <option value="">Select Marital status</option>
                                              <option value="Married">Married</option>
                                              <option value="Unmarried">Unmarried</option>
                                         
                                          </select>
       
        </div> */}
        <div className="col-12">
          <label for="department" className="form-label">
            Department
          </label>
          <select name="department"  id="department" className="form-select"
              onChange={(e) => setEmployee({...employee, department_id: e.target.value})}>
            {department.map((d) => {
              return <option value={d.id}>{d.name}</option>;
            })}
          </select>
        </div>
        {/* <div className="col-12 mb-3">
          <label className="form-label" for="inputGroupFile01">
            Select Image
          </label>
          <input
            type="file"
            className="form-control rounded-0"
            id="image"
            name="image"
            onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
          />
        </div> */}
        <div className="col-12 pt-4">
          <button type="submit" className="btn btn-primary w-100">
            Edit Employee
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default EditEmployee