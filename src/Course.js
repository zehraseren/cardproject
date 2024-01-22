function Course({image,title,descriptipn}) {
    return ( <div>
        <img src={image} alt=""/>
        <p>{title}</p>
        <p>{descriptipn}</p>
    </div> );
}

export default Course;