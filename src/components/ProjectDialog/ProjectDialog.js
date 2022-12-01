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

// Custom Dialog Title
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    paddingBottom: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#444',
  },
})

const BootstrapDialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <DialogTitle
      disableTypography
      id='dialog-title'
      className={classes.root}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <h2 className={classes.title}>{children}</h2>
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
    fontFamily: 'Poppins',
  },
}))(DialogContent)

const ProjectDialog = (props) => {
  const { isOpen, handleClose, project } = props

  return (
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
      <div className='project_dialog__tech'>
        {project.stack?.map((tech, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>#{tech}</p>
        ))}
      </div>

      <BootstrapDialogContent>
        <Typography className='project_dialog__description'>
          {project.description}
        </Typography>
        <div className='project_dialog__image_container'>
          <img
            src={project.mockup || coffeeCover}
            alt='coffee connoisseur'
            className='project_dialog__image'
            loading='lazy'
          />
        </div>

        <div>
          <Typography variant='h6' className='project_dialog__heading'>
            What I did:
          </Typography>
          <ul className='project_dialog__contribution_list'>
            {project.responsibilities?.map((task, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`list-${index}`}>
                <Typography className='project_dialog__contribution_list_item'>
                  {task}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </BootstrapDialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ProjectDialog
