const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await closeQueue();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main>
      <h4>Current Queue:</h4>
      <form onSubmit={handleFormSubmit}>
        <button className="btn d-block w-100" type="submit">
          Close Queue
        </button>
      </form>
    </main>
  );
}
};