import React, { useState, useEffect } from 'react';

export default function BasicProgram() {
  useEffect(() => {
    console.log('component mounted');
  }, []);
  return <h1>hello, devil!</h1>;
}
