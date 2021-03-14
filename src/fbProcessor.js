class Db {
  constructor() {
      const firebaseConfig = {
        apiKey: "AIzaSyB013UfOPZOk65_dKDMnd0F5coaxMvHBiE",
        authDomain: "todo-d2939.firebaseapp.com",
        projectId: "todo-d2939",
        storageBucket: "todo-d2939.appspot.com",
        messagingSenderId: "440343298477",
        appId: "1:440343298477:web:d2df307c41c0378c8fe124",
        measurementId: "G-6KGMEFTVJL"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
      this.firestore = firebase.firestore()

      this.todoRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/km95yzvx/todos/')
      this.startAfter = {}
    }

    addTodo({id, title, description = '', priority = '0', duedate=(new Date()).toISOString().slice(0, 10)}) { 
      this.todoRef.doc(id).set({
        title: title,
        description: description,
        priority: priority,
        duedate: duedate,
        timestamp: firebase.firestore.Timestamp.now()
      })
    }
    
    async queryToday1(fn) {
      const promises = []
      const projectsRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      const docsSnapshot = await projectsRef.get()
      docsSnapshot.forEach((docs) => {
        const snapshot = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${docs.id}/todos/`)
        .where('duedate', '==', `${(new Date()).toISOString().slice(0,10)}`)
        .orderBy('priority', 'desc')
        //.limit(3)
        .get()
        this.startAfter[docs.id] = snapshot
        promises.push(snapshot) 
      })

      Promise.all(promises).then((snapshots) => {
        for(const snap of snapshots)
          if(snap.empty) 
            console.log('No such documents!');
          else
            snap.forEach(doc => {
              console.log(doc.id);
              fn({id: doc.id, ...doc.data()})
            })
      })  
    }

    async getProjects(fn) {
      const snapshot = await this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      .get()
      snapshot.forEach(doc => {
        fn({id: doc.id, ...doc.data()})
      })
    }

    async queryToday2(fn) {
      const promises = []
      const projectsRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/')
      const docsSnapshot = await projectsRef.get()
      docsSnapshot.forEach(async (docs) => {
        const snapshot = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${docs.id}/todos/`)
        .where('duedate', '==', `${(new Date()).toISOString().slice(0,10)}`)
        .orderBy('priority')
        .startAfter(this.startAfter[docs.id])
        .limit(2)
        .get()
        this.startAfter[docs.id] = snapshot
        promises.push(snapshot) 
      })
      Promise.all(promises).then((snapshot) => {
        if(snapshot.empty) 
          console.log('No such documents!');
        else
          snapshot.forEach(doc => {
            fn({id: doc.id, ...doc.data()})
          })
      }) 
    }  


    sortByPriority(data) {
      
    }

    addProject({id, title}) {
      this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/`)
      .doc(`${id}`).set({
        title: title
      })
      //this.firestore.doc(`/users/u4yHxmnO1aGVxi0yg4gn/projects/${id}`).collection('todos') 
    }

    switchProject({id}) {
      this.todoRef = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/`)
      .doc(`${id}`).collection('todos')
    }
}

export default Db