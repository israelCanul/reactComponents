import React from 'react';  
import EmpleadoList from './empleado-list';


let empleados = [  
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkztRtCZZFQm5uWwR41mXgyXsdQrOPzDCwOFF50mLYAjGUbbi73LNI5w" },

]

React.render(<EmpleadoList listado={ empleados } />, document.getElementById('form-contact-react'))  