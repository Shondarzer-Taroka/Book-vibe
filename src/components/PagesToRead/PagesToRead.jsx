
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getLocalStorage } from '../Utilities/utility';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {

    let book=useLoaderData()
   let [bookItem,setBookItem] =useState([])
    console.log(book);

    useEffect(()=>{
        let localData=getLocalStorage()
        let newArray=[]
        for (const key of localData) {
            let item=book.find(bookkey=> bookkey.bookId== key)
            if (item) {
                newArray.push(item)
            }
            setBookItem(newArray)
        }
    },[book])

    console.log(bookItem);
      
  return (
     <section className='max-w-6xl mx-auto'>
<ResponsiveContainer width='90%' height={600}>
<BarChart
      // width={}
      // height={}
      data={bookItem}
      margin={{
        top: 20,
        right:30,
        left: 90,
        bottom:200,
      }}
    >
      <CartesianGrid strokeDasharray="3 3"/> 
      <XAxis dataKey="bookName" angle={-45} textAnchor='end' />
      <YAxis dataKey={'totalPages'}/>
      {/* <YAxis dataKey='totalPages'> </YAxis> */}
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookItem.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
      <Tooltip viewBox= {''} ></Tooltip>
      
    </BarChart>
    </ResponsiveContainer>
     </section>
    
  );
}