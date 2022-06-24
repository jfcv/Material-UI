import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Avatar,
} from "@mui/material";
import { IconButton } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { yellow, green, blue, pink } from "@mui/material/colors";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") return "3px solid aquamarine";
    },
  },
});

const NoteCard = ({ note, onDelete }) => {
  const classes = useStyles(note);

  return (
    //   shadows : elevation
    <Card elevation={6} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar
            sx={() => {
              let color = "";
              if (note.category === "work") color = yellow[700];
              else if (note.category === "reminders") color = green[500];
              else if (note.category === "todos") color = pink[500];
              else color = blue[500];
              return {
                backgroundColor: color,
              };
            }}
            className={classes.avatar}
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => onDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
