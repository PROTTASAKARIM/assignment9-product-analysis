import React from 'react';

const Blogs = () => {
    return (
        <div className='m-3'>
            <h1 className='font-semibold text-3xl m-3'>What is Context API?</h1>
            <p className='m-3 text-left'>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.Before context API if any children need to access any data from parent the parent had to pass that data directly to the children. If the children is 2 3 or any level down from that parent the that data had to be passed down to that every level to be used in that down level. But Context API has solved that problem. COntext API produces a global variable so that if the children is any level down that children can use that data directly from the parent </p>
            <p className='m-3 text-left'>Example : import React, createContext from "react";

            </p>
            <p className='m-3 text-left'>const UserContext = createContext();</p>
            <p className='m-3 text-left'>Now any children can use UserContext and access that value</p>
            <h1 className='font-semibold text-3xl m-3'>What is semantic Tag?</h1>
            <p className='m-3 text-left'>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            <p className='m-3 text-left'> On the other hand div , span this are non semantic elements. Because we can not define anything by seeing div ans span tags. </p>
            <p className='m-3 text-left'>But bys seeing header footer article tags we understand that in the header tag there are the elements of the heads of a web page. There are many semantic tags.</p>
            <p className='m-3 text-left'>Example: article, section , timer, nav etc </p>
            <p className='m-3 text-left'>Semantic tags helps us to build a better web structure for our web page </p>

        </div>
    );
};

export default Blogs;