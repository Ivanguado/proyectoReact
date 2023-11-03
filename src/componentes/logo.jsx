export const Logo = () => {
    return (
     <>
     <img src="data:image/png;base64,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"  alt='img logo'></img>
     </>
    )
 }