import React from "react";
import NotesApp from '../../client/components/notes/index'

const NotesPage = (props: any) => {
    return (
        <NotesApp />
    )
}
NotesPage.isUsingApollo = true;
export default NotesPage;