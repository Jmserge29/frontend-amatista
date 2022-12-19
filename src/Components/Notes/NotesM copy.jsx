const NotesM = ({DtaNotesMaterias}) => {
    return ( 
        <div className="portfolio-container filter-container" >
        {DtaNotesMaterias.map((DtaNotesMaterias)=>{
                return(
            <div className="col-md-4 py-2">
                <blockquote className="quote-box">
                <p className="quotation-mark px-3">
                    “
                </p>
                <p className="quote-text px-3">
                    Don't believe anything that you read on the internet, it may be fake. 
                </p>
                <hr/>
                <div className="blog-post-actions px-3">
                    <p className="blog-post-bottom pull-left">
                        Abraham Lincoln
                    </p>
                    <p className="blog-post-bottom text-right">
                    <span className="badge quote-badge">743</span>  ❤
                    </p>
                </div>
                </blockquote>
            </div>
            )
        })}          
        </div>
     );
}
 
export default NotesM;