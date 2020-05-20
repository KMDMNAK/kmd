import React from "react";
import NotesApp from '../../src/components/notes/index'

const NotesPage = (props: any) => {
    return (
        <NotesApp />
    )
}
NotesPage.isUsingApollo = true;
export default NotesPage;