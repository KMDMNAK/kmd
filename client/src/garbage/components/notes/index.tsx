import { QueryGetNotesArticlesArgs } from '../../utils/schemeType';
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MDXDisplay from './Display';
import { useNotesQuery } from '../../utils/schemeType'

const useStyles = makeStyles({
    root: {
        color: "white",
        backgroundColor: "white",
        width: "40%",
        height: "80%"
    }
});


const MDXEditor = (props: any) => {
    const [edingMD, setEdingMD] = useState("");
    const classes = useStyles();

    return (
        <div>
            <button onClick={() => { props.setMD(edingMD) }}>SUBMIT!</button>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="20"
                className={classes.root}
                defaultValue="Default Value"
                variant="standard"
                onChange={(e) => setEdingMD(e.target.value)}
            />
        </div>
    )
}

const GetNote = () => {
}

const NotesApp = () => {
    const [md, setMD] = useState("");
    const { data, error, loading } = useNotesQuery();
    console.log(md)

    return (
        <div>
            <MDXEditor setMD={setMD} />
            {!loading && data && data.getNotesArticles && (
                data.getNotesArticles.map(each_article => each_article && (
                    <div>
                        <MDXDisplay md={each_article.sentences} />
                    </div>)
                )

            )}

        </div>
    );
}

export default () => (
    <div>
        <NotesApp />
    </div>
)