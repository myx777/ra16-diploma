const DownloadMore = () => {

    const { data, isLoading, error, fetchNow } = useFetch({ url: link });
    const handlyCLick = () => {    
        if (link.includes("category")) {
          console.info(link);
          link = `${link}&offset=${cards.length}`; 
        }
      };
    return (
<>Download More</>
    );
}
export default DownloadMore;