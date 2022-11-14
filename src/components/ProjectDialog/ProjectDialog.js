import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import CloseIcon from '@material-ui/icons/Close'
import coffeeCover from '../../static/coffee_connoisseur.png'

import './ProjectDialog.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    fontWeight: '700',
  },
})

const BootstrapDialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <DialogTitle
      disableTypography
      id='dialog-title'
      className={classes.root}
      // {...other}
    >
      <Typography variant='h5' className={classes.title}>
        {children}
      </Typography>
      <IconButton
        aria-label='close'
        className={classes.closeButton}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  )
})

const BootstrapDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent)

const ProjectDialog = (props) => {
  const { isOpen, handleClose, project } = props

  return (
    <>
      <Dialog
        fullWidth
        maxWidth='md'
        open={isOpen}
        onClose={handleClose}
        aria-labelledby='dialog-with-title'
        className='project_dialog__root'
      >
        <BootstrapDialogTitle onClose={handleClose}>
          {project.name}
        </BootstrapDialogTitle>
        <DialogContent>
          <Typography className='project_dialog__description'>
            {project.description}
          </Typography>
          <img
            src={coffeeCover}
            alt='coffee connoisseur'
            className='project_dialog__image'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProjectDialog
