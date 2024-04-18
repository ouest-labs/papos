const timeAgo = (date: Date) => {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - date.getTime();
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);

  if (elapsedHours >= 24) {
    const days = Math.floor(elapsedHours / 24);
    return `il y a ${days} jours`;
  } else if (elapsedHours >= 1) {
    return `il y a ${elapsedHours} heures`;
  } else if (elapsedMinutes >= 1) {
    return `il y a ${elapsedMinutes} minutes`;
  } else {
    return "Maintenant";
  }
};

export default timeAgo;