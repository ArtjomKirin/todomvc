synchronized (Note.notes) {
    Note.addNote(String.format("%s-Note%d", getName(), i));
}