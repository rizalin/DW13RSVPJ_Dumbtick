import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {

    Link
} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #FFF',
        boxShadow: theme.shadows[5],
        padding: '0px',
        textAlign: "center",
        flexDirection: "row",
        display: "flex",
        maxWidth: '100%',
        maxHeight: '100%'

    },
    isiContent: {
        width: '600px',
        padding: '20px 40px'
    }
}));

const useStyles2 = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
            display: 'block',
            textAlign: 'center',

        },

    },
    root2: {
        margin: theme.spacing(1),
        display: "inline-block",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: '25px',
        textAlign: "center",
        paddingLeft: '15px',
        paddingRight: '15px',
    }
}));



export default function ModalWarning() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>

            <Button onClick={handleOpen}>
                Sign-in
                </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <div className={classes.isiContent}>
                            <h1 id="transition-modal-title" style={{ margin: '10px', textAlign: 'center' }}>Tidak diperbolehkan</h1>
                            <p id="transition-modal-description" style={{ fontSize: '18px', color: '#757575' }}>
                                Anda harus terdaftar untuk membeli tiket. Klik Login jika sudah mempunyai akun atau Register jika anda belum mempunyai akun</p>


                        </div>


                    </div>

                </Fade>
            </Modal>

        </div>

    );
}
