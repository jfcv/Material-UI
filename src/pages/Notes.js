import axios from "axios";
import { Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const url = `http://localhost:9005/notes`;
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios(url);
      setNotes(response.data);
    }
    getData();
  }, []);

  const handleDelete = async (id) => {
    const originalNotes = [...notes];

    /**
     * optimistic update
     * 1. updates locally
     * 2. make the request to the server
     * 3. if the request fails sets back the state to its original state
     */
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);

    try {
      await axios({
        method: "delete",
        url: `${url}/${id}`,
      });
    } catch (error) {
      console.error(error);
      setNotes(originalNotes);
    }
  };

  return (
    <Container>
      {/* margin : spacing */}
      <Grid container spacing={3}>
        {notes.map((note) => (
          // columns : xs, md, lg
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <NoteCard note={note} onDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
