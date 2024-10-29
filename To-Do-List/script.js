(() => { 
  let taskArray = [];

  const form = document.querySelector(".form"); 
  const input = form.querySelector(".form__input");
  const ul = document.querySelector(".taskList"); 

  form.addEventListener('submit', e => {
      e.preventDefault();
      let taskId = String(Date.now());
      let taskText = input.value;
      addTaskToDOM(taskId, taskText);
      addTaskToArray(taskId, taskText);
      input.value = '';
  });
  
  ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id');
      if (!id) return;
      removeTaskFromDOM(id);
      removeTaskFromArray(id);
  });
  
  function addTaskToDOM(taskId, taskText) {    
      const li = document.createElement('li');
      li.setAttribute("data-id", taskId);
      li.innerText = taskText;
      ul.appendChild(li);
  }
  
  function addTaskToArray(taskId, taskText) {
      taskArray.push({ taskId, taskText });
      console.log(taskArray);
  }
  
  function removeTaskFromDOM(id) {
      var li = document.querySelector('[data-id="' + id + '"]');
      ul.removeChild(li);
  }
  
  function removeTaskFromArray(id) {
      taskArray = taskArray.filter(item => item.taskId !== id);
      console.log(taskArray);
  }
})();
