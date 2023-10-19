import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"

function TermsAndService({ open, close }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    padding: 2,
    marginTop: 4,
    marginBottom: 10,
    overflow: "auto",
  }

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={close}
          sx={{
            position: "absolute",
            right: 6,
            top: 6,
            color: (theme) => theme.palette.grey[800],
          }}>
          <CloseIcon />
        </IconButton>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2">
          Nutzungsbedingungen für die Finco-App
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          Diese Nutzungsbedingungen ("Bedingungen") regeln Ihre Nutzung der
          Finco-App ("App") und alle damit verbundenen Dienste. Bitte lesen Sie
          diese Bedingungen sorgfältig durch, bevor Sie die App nutzen. Durch
          die Nutzung der App erklären Sie sich mit diesen Bedingungen
          einverstanden.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          1. Zustimmung zu den Bedingungen 1.1. Durch die Nutzung der App
          erklären Sie sich damit einverstanden, an diese Bedingungen gebunden
          zu sein. 1.2. Wenn Sie mit diesen Bedingungen nicht einverstanden
          sind, dürfen Sie die App nicht nutzen.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          2. Nutzung der App 2.1. Sie dürfen die App nur für rechtmäßige Zwecke
          nutzen. 2.2. Sie sind für die Vertraulichkeit Ihrer Anmeldedaten
          verantwortlich und dürfen diese nicht an Dritte weitergeben. 2.3. Sie
          dürfen die App nicht für betrügerische oder illegale Aktivitäten
          nutzen.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          3. Geistiges Eigentum 3.1. Die App und alle darin enthaltenen Inhalte
          sind durch Urheberrechte und andere geistige Eigentumsrechte
          geschützt. 3.2. Sie dürfen die Inhalte der App nicht ohne vorherige
          schriftliche Genehmigung des Rechteinhabers vervielfältigen,
          modifizieren, verbreiten oder anderweitig nutzen.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          4. Haftungsausschluss 4.1. Die App wird "wie besehen" und "wie
          verfügbar" bereitgestellt, ohne jegliche ausdrückliche oder
          stillschweigende Gewährleistung. 4.2. Wir übernehmen keine
          Verantwortung für Schäden, die durch die Nutzung der App entstehen.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          5. Änderungen der Bedingungen 5.1. Wir behalten uns das Recht vor,
          diese Bedingungen jederzeit zu ändern. 5.2. Die geänderten Bedingungen
          werden auf der App veröffentlicht und treten sofort in Kraft.
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}>
          6. Beendigung 6.1. Wir können Ihre Nutzung der App jederzeit aus
          beliebigen Gründen beenden. 6.2. Sie können Ihre Nutzung der App
          jederzeit beenden, indem Sie die App von Ihrem Gerät löschen.
        </Typography>
      </Box>
    </Modal>
  )
}

export default TermsAndService
