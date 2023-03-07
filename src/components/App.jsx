import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchImages from "../services/image-fetch-api";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

class App extends Component {
    state = {
        images: [],
        page: 1,
        queryString: "",
        error: null,
        isLoading: false,
        isModalOpen: false,
        imageForModal: "",
    };

    handleFormSubmit = queryString => {
        this.setState({
            images: [],
            page: 1,
            queryString: queryString,
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.queryString !== this.state.queryString) {
            this.getImages();
        }
        if (this.state.page > 2) {
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: "smooth",
            });
        }
    }

    getImages = async () => {
        const { queryString, page } = this.state;

        try {
            this.setState({
                isLoading: true,
            });

            const { hits } = await fetchImages(queryString, page);

            this.setState(prevState => ({
                images: [...prevState.images, ...hits],
                page: prevState.page + 1,
            }));
        } catch (error) {
            console.log(`Fetch error: ${error}`);
            this.setState({ error });
        } finally {
            this.setState({ isLoading: false });
        }
    };

    handleImageClick = imageLink => {
        this.setState({ imageForModal: imageLink });
        this.toggleModal();
    };

    handleLoadMore = () => {
        this.getImages();
    };

    toggleModal = () => {
        this.setState(({ isModalOpen }) => ({
            isModalOpen: !isModalOpen,
        }));
    };

    render() {
        const { images, queryString, isLoading, isModalOpen, imageForModal } =
            this.state;

        return (
            <>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <ImageGallery
                    images={images}
                    onImageClick={this.handleImageClick}
                />
                {images.length > 0 && isLoading === false && (
                    <Button onClick={this.handleLoadMore} />
                )}
                {isLoading && <Loader />}
                {isModalOpen && (
                    <Modal
                        image={imageForModal}
                        description={queryString}
                        onClose={this.toggleModal}
                    />
                )}
            </>
        );
    }
}

export default App;
