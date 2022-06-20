const DiaryItem = ({author,content, created_date, emotion, id}) =>{


return (

    <div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정점수 : {emotion}</span>
            <br />
            <span className="date">{new Date(created_date).toLocaleString()}</span>
        </div>
    <div className="content">{content}</div>

    </div>
    // <div key={it.id}>
    // <div>작성자 : {it.author}</div>
    // <div>일기 : {it.content}</div>
    // <div>감정 : {it.emotion}</div>
    // <div>작성 시간 : {it.created_date}</div>              
    // </div>
)


}

export default DiaryItem;