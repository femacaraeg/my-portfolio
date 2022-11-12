import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  // IconButton,
  Typography,
  Button,
} from '@material-ui/core'
// import CloseIcon from '@material-ui/icons/Close'

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
      >
        <DialogTitle id='dialog-title'>
          <Typography>{project.name}</Typography>
        </DialogTitle>
        <DialogContent>Description</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProjectDialog
