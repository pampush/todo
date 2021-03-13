class Db {
  constructor() {
      const firebaseConfig = {
          apiKey: "AIzaSyDcNQbxeQw5cxqq1N_L08AO3ZSimHgJ7CU",
          authDomain: "library-a79ce.firebaseapp.com",
          databaseURL: "https://library-a79ce-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "library-a79ce",
          storageBucket: "library-a79ce.appspot.com",
          messagingSenderId: "274413151617",
          appId: "1:274413151617:web:3ede87e19884f888453480",
          measurementId: "G-Q8L338M7WV"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
      this.firestore = firebase.firestore()

      this.todoRef = this.firestore.collection('/users/u4yHxmnO1aGVxi0yg4gn/projects/KuWpVgbOobrBZxCUFjDq/todos/')
    }

    addTodo({id, title}) {
      this.todoRef.doc(id).set({
          title: title
      })
    }

    addProject({id, title}) {
      this.firestore.collection(`/users/u4yHxmnO1aGVxi0yg4gn/projects/`)
      .doc(`${id}`).set({
        title: title
      })
      //this.firestore.doc(`/users/u4yHxmnO1aGVxi0yg4gn/projects/${id}`).collection('todos') 
    }

    switchProject({id}) {
      this.todoRef = this.firestore.collection(`/users/u4yHxmnO1aGVxi0yg4gn/projects/`)
      .doc(`${id}`).collection('todos')
    }
}

export default Db