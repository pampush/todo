//import all images in Map ['src path', 'dist path']
function importAll(r) {
  return new Map(r.keys().map((value) => [value, r(value)] ));
}

const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg|gif)$/));

class View {
    constructor() {
      this.todoContainer = document.querySelector('.todos-container')
      this.addButton = document.querySelector('.todos-container__add-button')
      this.viewIcon = new ViewIcon()
    }

    renderTodo({title}) {
      let li = document.createElement('li'),
        input = document.createElement('input'),
        desc = document.createElement('div'),
        controls = document.createElement('div')

      li.classList.add('todos-container__item')
      input.setAttribute('type', 'checkbox')
      input.setAttribute('name', '')
      input.setAttribute('id', 'checkbox')
      desc.classList.add('todos-container__item-title')
      controls.classList.add('todos-container__item-controls')
      
      controls.append(this.viewIcon.createIcon({url: images.get('./edit.svg'), alt: 'edit', className: 'todos-container__item-controls-edit' }))
      controls.append(this.viewIcon.createIcon({url: images.get('./delete.svg'), alt: 'delete', className: 'todos-container__item-controls-delete' }))

      desc.textContent = title
      li.append(input, desc, controls)

      this.todoContainer.append(li)
    }

}

class ViewIcon {
  createIcon({url, alt = '', className = ''}) {
    const myImg = new Image()
    myImg.src = url
    myImg.alt = alt
    myImg.classList.add(className)
    return myImg
  }
}
export default View