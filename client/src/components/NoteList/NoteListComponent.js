import NoteCounterComponent from "../NoteCounter/NoteCounterComponent";
import "./NoteListComponent.css"; 

/** 
 * @todo call the API over here
 * @todo Implement NoteCounterComponent list population system 
 */


function NoteListComponent() {
  var notesObject = [
    {
      noteTitle: "Lorem Ipsum stuff",
      noteDescription: "This is for test",
      noteContent: "lorem ipsum etc etc"
    },
  ];
  return(
    <div className={"NoteListComponent"}>
      {notesObject.forEach((elem) => {
        <NoteCounterComponent 
          title={elem.noteTitle}
          description={elem.noteDescription}
        />
      })}
      <NoteCounterComponent
        title={"Travel Blog"}
        description={"This blog is meant for only travel lovers.."}
      />
    </div>
  );
}


export default NoteListComponent;