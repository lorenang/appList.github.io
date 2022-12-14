import { addTask } from './components/addTask.js';
import { readTasks } from './components/readTasks.js';

const btn = document.querySelector('[data-form-btn]');

//Arrow functions o funciones anonimas
btn.addEventListener('click', addTask);

readTasks();

//localStorage.setItem('tasks', JSON.stringify (datos))
//La manera correcta de transformar los datos en string es a través de JSON.stringify y aprovechamos para utilizar el setItem para almacenar los datos localmente.

//tasksList.forEach((task) => {
    //list.appendChild(createTask(task))
//})
//LocalStorage se comporta como un arreglo, podemos utilizar métodos de arreglo como el forEachpara iterar sobre los ítems. Después, cada ítem es pasado para el componente Tarea, lo cual será agregado dentro del elemento padre representado por lista.

/*dates.sort((a, b) => {
    const firstDate = moment(a, 'DD/MM/YYYY')
    const secondDate = moment(b, 'DD/MM/YYYY')
    return firstDate - secondDate
})}*/
//Utilizamos el método sort para ordenación.

/*tasks[index]['complete'] = !tasks[index]['complete']
El signo de exclamación ! es un operador de negación, luego, niega el estado que era verdade, transformándolo en falso.*/