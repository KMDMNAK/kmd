import React from "react";
import NotesApp from '../../components/notes/index'

const NotesPage = (props: any) => {
    return (
        <NotesApp />
    )
}
NotesPage.isUsingApollo = true;
export default NotesPage;