function demo(greet){
    console.log(greet,this.name)
}
const person = {name:"kavi"}
  demo.call(person,"hai")
