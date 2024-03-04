import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos =  [
      {
        "titulo": "Desarrollo Web con Angular",
        "profesor": "Juan Pérez",
        "profesor_avatar_url": "https://ejemplo.com/avatar_juan_perez.jpg",
        "temario": [
          "Introducción a Angular",
          "Componentes y Directivas",
          "Rutas y Navegación",
          "Servicios y Dependencias",
          "Formularios en Angular",
          "Interacción con el Servidor",
          "Gestión de Estado con RxJS"
        ],
        "alumnos_matriculados": [
          "María García",
          "Luis Martínez",
          "Ana López",
          "Carlos Rodríguez"
        ],
        "valoraciones": [
          {
            "nombre": "María García",
            "calificacion": 5,
            "comentario": "Excelente curso, muy completo."
          },
          {
            "nombre": "Luis Martínez",
            "calificacion": 4,
            "comentario": "Muy buenos ejemplos y explicaciones claras."
          },
          {
            "nombre": "Ana López",
            "calificacion": 4,
            "comentario": "Interesante, pero algunos conceptos son un poco complejos."
          }
        ]
      },
      {
        "titulo": "Introducción a Python",
        "profesor": "Laura Sánchez",
        "profesor_avatar_url": "https://ejemplo.com/avatar_laura_sanchez.jpg",
        "temario": [
          "Introducción a Python",
          "Estructuras de Control",
          "Funciones y Módulos",
          "Trabajo con Archivos",
          "Programación Orientada a Objetos"
        ],
        "alumnos_matriculados": [
          "Pedro González",
          "Sofía Fernández",
          "Javier Díaz",
          "Elena Ruiz"
        ],
        "valoraciones": [
          {
            "nombre": "Pedro González",
            "calificacion": 5,
            "comentario": "Fantástico curso, muy bien explicado."
          },
          {
            "nombre": "Sofía Fernández",
            "calificacion": 4,
            "comentario": "Me gustó mucho, aunque esperaba más ejercicios prácticos."
          },
          {
            "nombre": "Javier Díaz",
            "calificacion": 4,
            "comentario": "Buen curso, pero algunas secciones podrían ser más detalladas."
          }
        ]
      },
      {
        "titulo": "Bases de Datos con SQL",
        "profesor": "Marta Jiménez",
        "profesor_avatar_url": "https://ejemplo.com/avatar_marta_jimenez.jpg",
        "temario": [
          "Introducción a las Bases de Datos",
          "Modelado de Datos",
          "Consultas SQL Básicas",
          "Consultas Avanzadas",
          "Integridad de Datos y Transacciones"
        ],
        "alumnos_matriculados": [
          "David Ramírez",
          "Laura López",
          "Marcos Sánchez",
          "Patricia Martín"
        ],
        "valoraciones": [
          {
            "nombre": "David Ramírez",
            "calificacion": 4,
            "comentario": "Muy completo, me ayudó mucho en mi trabajo."
          },
          {
            "nombre": "Laura López",
            "calificacion": 5,
            "comentario": "Excelente curso, bien estructurado y explicado."
          },
          {
            "nombre": "Marcos Sánchez",
            "calificacion": 4,
            "comentario": "Buen curso, aunque algunas secciones podrían ser más prácticas."
          }
        ]
      }
    ];



  constructor() { }

  getCursos(){
    return this.cursos;
  }
  getCurso(nombre:string | null){
    return this.cursos.find(({titulo})=> titulo === nombre)
  }

  matricular(cursoMatricular:string, alumno:string){
    console.log(`matriculado ${alumno} en ${cursoMatricular}`);
    var posicion = this.cursos.findIndex((curso)=> curso.titulo === cursoMatricular);
    this.cursos[posicion].alumnos_matriculados.push(alumno);
  }
}
