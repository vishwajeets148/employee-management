import express from 'express'
import con from '../utils/db.js'
import jwt  from 'jsonwebtoken'
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";

const router = express.Router()

//Image Upload

// image upload 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
        // cb(null, Date.now() + '-' + file.originalname);
    }
})
const upload = multer({
    storage: storage
})
// end image upload 


// Login Api routes

router.post('/adminlogin',(req,res)=>{
    const sql = "SELECT * from admin Where email = ? and password = ?"
    con.query(sql,[req.body.email,req.body.password],(err,result)=>{
    if(err) return res.json({loginStatus: false, Error: "QueryError"})
    if(result.length > 0){
        const email = result[0].email;
        const token = jwt.sign({role:"admin",email:email, id:result[0].id},
        "jwt_secret_key", {expiresIn:"1d"}
        
        )
        res.cookie('token', token)
        return res.json({loginStatus: true})
    }
    else{
        return res.json({loginStatus: false, Error: "wrong email and password"})
    }
})

})



// create department api

// create data
router.post('/add_department', (req, res) => {
    const sql = "INSERT INTO department (`name`) VALUES (?)"
    con.query(sql, [req.body.department], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true})
    })
})

// fetch department data
// get data

router.get('/department', (req, res) => {
    const sql = "SELECT * from department";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

/// Add employee data to employee data table

// Create Resource

router.post('/add_employee', upload.single('image'), (req, res) => {
    const sql = `INSERT INTO employees 
    (employee_id, name, date_of_birth, mobile_no, alternate_no, city, address, postal_code , qualification, year_of_experience, start_date, end_date, gender ,marital_status, email, password,department_id, image, salary) 
    VALUES (?)`;
    bcrypt.hash(req.body.password, 10, (err,hash)=>{
        if(err) return res.json({Status: false, Error: "Query Error"})
        const values=[
            req.body.employee_id, 
            req.body.name,
            req.body.date_of_birth,
            req.body.mobile_no,
            req.body.alternate_no,
            req.body.city,
            req.body.address,
            req.body.postal_code,
            req.body.qualification,
            req.body.year_of_experience,
            req.body.start_date,
            req.body.end_date,
            req.body.gender,
            req.body.marital_status,
            req.body.email,
            hash,
            req.body.department_id,
            req.file.filename,
            req.body.salary
    
        ]
        con.query(sql, [values], (err, result)=>{
            if(err) return res.json({Status: false, Error: "Query Error"+err})
            return res.json({Status: true})
        })
    })

})

// Fetch employee data from database
// GET

router.get('/employee', (req, res) => {
    const sql = "SELECT * from employees";
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})


/// Fetch employee data in Edit section from database

// get employee data in Edit section from database

// router.get('/employee/:id', (req, res) => {
//     const id =req.params.id;
//     const sql = "SELECT * from employees where employee_id =?";
//     con.query(sql, [employee_id], (err, result) => {
//         if(err) return res.json({Status: false, Error: "Query Error"})
//         return res.json({Status: true, Result: result})
//     })
// })


router.get('/employee/:id', (req, res) => {
    const id =req.params.id;
    const sql = "SELECT * from employees where id =?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

// update data in database
// put data in database

router.put('/edit_employee/:id', (req, res)=>{
         const id= req.params.id;
         const sql= `UPDATE employees 
         set employee_id = ?, name = ?, mobile_no = ? , alternate_no = ?, city = ?, email = ?, salary = ?, postal_code=?,qualification=?,year_of_experience=?,start_date=?,end_date=?, address=?,department_id=?   
         Where id=?`

         const values=[
            req.body.employee_id, 
            req.body.name,
            req.body.mobile_no,
            req.body.alternate_no,
            req.body.city,
            req.body.email,
            req.body.salary,
            req.body.postal_code,
            req.body.qualification,
            req.body.year_of_experience,
            req.body.start_date,
            req.body.end_date,
            req.body.address,
            req.body.department_id
        ]
         con.query(sql, [...values, id], (err, result) => {
            if(err) return res.json({Status: false, Error: "Query Error"+err})
            return res.json({Status: true, Result: result})
        })
})

// delete data in database

router.delete('/delete_employee/:id', (req, res) => {
    const id =req.params.id;
    const sql = "DELETE FROM employees WHERE id =?";
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"})
        return res.json({Status: true, Result: result})
    })
})

// Admin register in database
 router.get('/admin_count', (req, res) => {
  const sql = "select count(id) as admin from admin"
  con.query(sql, (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"})
    return res.json({Status: true, Result: result})
})

})

// Employee count 
router.get('/employee_count', (req, res) => {
    const sql = "select count(id) as employees from employees"
    con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
  
  })

  // Total salary of the employees

  router.get('/salary_count', (req, res) => {
    const sql = "select sum(salary) as salaryOFEmp from employees"
    con.query(sql, (err, result) => {
      if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true, Result: result})
  })
  
  })

  // Admin Records

  router.get('/admin_records', (req, res) => {
    const sql = "select * from admin"
    con.query(sql, (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
        return res.json({Status: true, Result: result})
    })
})

//  Logout

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})







export {router as adminRouter}