import React from "react";

export default function NotificationError({ message }) {
  if (message === null) {
    return null;
  }

  return <div className={`${message ? "error" : ""}`}>{message}</div>;
}
