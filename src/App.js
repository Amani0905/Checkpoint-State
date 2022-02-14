import React, { Component } from 'react'
export default class App extends Component {
  state = {
    fullName: "Amani Bouzouita",
    bio:"I'm a science material doctor converted to a passionate programming freelancer with 1 year experience in web fullstack developper. Inspired by sciences i can realise creative and fascinating web.I love sharing and contributing to the tech community and it become a significant part of my career.When I'm not coding, you can find me geeking about Technology and Innovation,training, trying new food recipes, and exploring different ways of creating content that can help people pivot their tech careers.",
    imgSrc: "https://www.doyoubuzz.com/var/users/_/2019/1/10/16/1767430/avatar/1802995/avatar_cp_big.jpg?t=1635281649",
    profession: "I'm an R&D Engineer in a startup working on prototyping and scaling-up new Technology/Products",
    show: false,
    count:0,
  }
  toggle =() =>{
    this.setState({show: !this.state.show})
  }
  componentDidMount(){
    setInterval(()=>this.setState({count:this.state.count+1}),1000)
    
  }
  render() {
    return (
      <div style={{backgroundColor:"white",color:"black",fontWeight:"normal",textAlign:"center"}}>
      <span style={{color:"darkGreen",fontWeight:"bolder"}} >{this.state.count} seconds</span>
      {this.state.show ? (
        <>
          <h1>{this.state.fullName}</h1>
          <h1>{this.state.bio}</h1>
          <img src={this.state.imgSrc} alt="failed" />
          <h1>{this.state.profession}</h1>
        </>
      ) : (
        <h1>Show Profile</h1>
      )
      }
      <button className="btn btn-outline-success" onClick={this.toggle}>{!this.state.show ? "Show" : "Hide"}</button>
      </div>
  );
}}
