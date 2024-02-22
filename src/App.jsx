import React from 'react';
import Card from './components/card';

function App() {
  let users = [
    {
      name: 'Khayam Ijaz',
      id: '@mrkhayamijaz',
      img: 'https://favim.com/pd/s10/orig/160502/cute-boy-boy-brows-hot-boy-Favim.com-4270100.jpeg'
    },
    {
      name: 'Haseeb',
      id: '@mrhaseebazeem',
      img: 'https://lh5.googleusercontent.com/6ukvhYbQ6gZcml7cD-VlnN0QZDtR-Yi4BGSp_L8q9I64_apG_74COY4x0dZXw4mW97UIDKUA3Sxj8SncshH17DZpAOyty5CxoEqdY1Wc73PPRwzvrTLkiGi_KHsgHFLolasJGFCAQtN1Gf-XYqodtmE'
    },
    {
      name: 'Zaryab',
      id: '@mrzaryabnaseem',
      img: 'https://images.nightcafe.studio/jobs/gnjlb4DVh3gl8lgkOLnQ/gnjlb4DVh3gl8lgkOLnQ--1--wp6i8.jpg?tr=w-1600,c-at_max'
    },
    {
      name: 'Coder',
      id: '@mrprogrammer',
      img: 'https://images.nightcafe.studio/jobs/gnjlb4DVh3gl8lgkOLnQ/gnjlb4DVh3gl8lgkOLnQ--1--wp6i8.jpg?tr=w-1600,c-at_max'
    }
  ];
  return (
    <>
    <div className='bg-zinc-900 w-full h-screen flex justify-center items-center gap-4 flex-col'>
    {users.map((i,index)=>{
      return (<Card key={index} userName = {i.name} para = {i.id} image = {i.img}></Card>);
    })}
    </div>
    </>
  );
}

export default App;
