import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    employee_id:"",
    name: "",
    date_of_birth: "",
    mobile_no:"",
    alternate_no: "",
    city:'',
    email: "",
    postal_code:"",
    password: "",
    qualification: "",
    year_of_experience:"",
    start_date:"",
    end_date:"",
    gender:"",
    marital_status:"",
    address: "",
    department_id: "",
    image: "",
    salary:""
  });
  const [department, setDepartment] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/department")
      .then((result) => {
        if (result.data.Status) {
          setDepartment(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('employee_id', employee.employee_id);
    formData.append('name', employee.name);
    formData.append('date_of_birth', employee.date_of_birth);
    formData.append('mobile_no', employee.mobile_no);
    formData.append('alternate_no', employee.alternate_no);
    formData.append('city', employee.city);
    formData.append('postal_code', employee.postal_code);
    formData.append('qualification', employee.qualification);
    formData.append('year_of_experience', employee.year_of_experience);
    formData.append('start_date', employee.start_date);
    formData.append('end_date', employee.end_date);
    formData.append('gender', employee.gender);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('marital_status', employee.marital_status);
    formData.append('image', employee.image);
    formData.append('department_id', employee.department_id);
    formData.append('salary', employee.salary);

    axios.post('http://localhost:5000/auth/add_employee', formData)
    .then(result => 
      {
        if(result.data.Status) {
            navigate('/dashboard/employee')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
        <div className="col-12">
            <label for="inputName" className="form-label">
              Employee Id
            </label>
            <input
              type="number"
              required
              className="form-control rounded-0"
              id="inputEmployeeId"
              placeholder="Employee Id"
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
              required
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputdob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              required
              className="form-control rounded-0"
              id="inputdob"
              placeholder="Enter Name"
              onChange={(e) =>
                setEmployee({ ...employee, date_of_birth: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              required
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              required
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              required
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputMobile"
              placeholder="Enter Mobile no"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputAlternateno"
              placeholder="Enter Alternate no"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputCity"
              placeholder="Enter City"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputPostal"
              placeholder="832659"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputQualification"
              placeholder="Qualification"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputYearsOFExperience"
              placeholder=" Years of Experience"
              autoComplete="off"
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
              required
              className="form-control rounded-0"
              id="inputDateofJoining"
              placeholder="Date of Joining"
              autoComplete="off"
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
              onChange={(e) =>
                setEmployee({ ...employee, end_date: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputQualification" className="form-label">
            Gender
            </label>
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
            <select className="form-control rounded-0" required id="gender"  placeholder="Gender"  onChange={(e) =>
                setEmployee({ ...employee, gender: e.target.value })} >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                           
                                            </select>
          </div>
          <div className="col-12">
            <label for="inputQualification" className="form-label">
            Marital status
            </label>
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
              <select className="form-control rounded-0"  required id="martial"  placeholder="Marital status"  onChange={(e) =>
                setEmployee({ ...employee, marital_status: e.target.value })} >
                                                <option value="">Select Marital status</option>
                                                <option value="Married">Married</option>
                                                <option value="Unmarried">Unmarried</option>
                                           
                                            </select>
         
          </div>
          <div className="col-12">
            <label for="department" className="form-label">
              Department
            </label>
            <select name="department" id="department" className="form-select"
                onChange={(e) => setEmployee({...employee, department_id: e.target.value})}>
              {department.map((d) => {
                return <option value={d.id}>{d.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" for="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              required
              className="form-control rounded-0"
              id="image"
              name="image"
              onChange={(e) => setEmployee({...employee, image: e.target.files[0]})}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;