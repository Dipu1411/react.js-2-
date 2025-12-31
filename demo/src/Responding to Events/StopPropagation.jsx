function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

export default function StopPropagation() {
    return (
        <>
            <div onClick={() => {
                alert("you clicked this button");
            }}>

                <Button onClick={() => {
                    alert("you clicked the button inside the div");
                }}>
                    this is inside button
                </Button>

                <Button onClick={() => {
                    alert("you clicked the button outside the div");
                }}>
                    this is outside button
                </Button>

            </div>
        </>
    )
}