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

      //this.todoRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/km95yzvx/todos/')
      this.todoRef = this.firestore.collection('/users/3nrCmkaHwUvK1zpOLmKG/projects/home/todos/')
      this.projectRef = this.firestore.doc('/users/3nrCmkaHwUvK1zpOLmKG/projects/home/')
      
      this.startAfter = {}
    }

    addTodo({id, projectid, title, description = '', priority = '0', duedate=(new Date()).toISOString().slice(0, 10)}) { 
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos/${id}`)
      .set({
        title: title,
        description: description,
        priority: priority,
        duedate: duedate,
        timestamp: firebase.firestore.Timestamp.now(),
        projectid: projectid
      })
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/`).update({
        counter: firebase.firestore.FieldValue.increment(1)
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
            console.log(`No such documents`);
          else
            snap.forEach(doc => {
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

    async queryProject(fn, projectid) {
      const projectRef = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos`)
      const snapshot = await projectRef.get()
      if(snapshot.empty) 
          console.log('No such documents!');
      else
        snapshot.forEach(doc => {
          fn({id: doc.id, ...doc.data()})
        })
    }

    sortByPriority(data) {
      
    }

    addProject({id, title}) {
      this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/`)
      .doc(`${id}`).set({
        title: title,
        counter: 0
      })
    }

    deleteTodo({id, projectid}) {
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/todos/${id}`).delete()
      this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${projectid}/`).update({
        counter: firebase.firestore.FieldValue.increment(-1)})
    }

    async deleteProject(id) {
      /* bad approach for large subcollection */
      const promises = []
      const projectRef = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/`)
      const snapshot = await projectRef.get()
      snapshot.forEach(doc => {
        promises.push(this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/${doc.id}`).delete())
      })
      
      Promise.all(promises).then(async(snapshot) => {
        if(snapshot.empty) 
          console.log('No such documents!');
        else
          await this.firestore.doc(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}`).delete()
      }) 
      // const path = this.firestore.collection(`/users/3nrCmkaHwUvK1zpOLmKG/projects/${id}/todos/`)
      // let deleteFn = firebase.functions().httpsCallable('recursiveDelete')
      // deleteFn({ path: path })
      //     .then(function(result) {
      //         logMessage('Delete success: ' + JSON.stringify(result))
      //     })
      //     .catch(function(err) {
      //         logMessage('Delete failed, see console,')
      //         console.warn(err)
      //     });
  }
}

export default Db