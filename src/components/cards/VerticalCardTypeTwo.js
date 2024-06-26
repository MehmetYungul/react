import { useState } from "react";
import { useTranslation } from "react-i18next";
import CustomImageContainer from "../CustomImageContainer";
import AddWithIncrementDecrement from "./AddWithIncrementDecrement";
import { CustomOverLay } from "./Card.style";
import QuickView from "./QuickView";
import { FoodHalalHaram } from "./SpecialCard";
import { CartWrapper, ImageWrapper, Wrapper } from "./VerticalCard";
import vertical_card_image from "./assets/vartical_card_image.png";

const VerticalCardTypeTwo = (props) => {
	const { marginbottom } = props;
	const [isHover, setIsHover] = useState(false);
	const [showAddtocart, setShowAddtocart] = useState(true);
	const [isButtonClicked, setIsButtonClicked] = useState(false);
	const { t } = useTranslation();
	const quickViewHandleClick = (e) => {
		// e.stopPropagation();
		// dispatch({ type: ACTION.setOpenModal, payload: true });
	};
	const handleAddToCardFromQuickview = () => {
		setShowAddtocart(false);
	};
	const handleCardHoverFromCartIconClick = (e) => {
		// e.stopPropagation();
		setIsButtonClicked(true);
		setIsHover(false);
	};
	const handleHover = () => {
		if (!isButtonClicked) {
			setIsHover(true);
		}
	};

	const handleLeave = () => {
		if (!isButtonClicked) {
			setIsHover(false);
		}
	};
	return (
		<Wrapper
			alignItems="center"
			justifyContent="center"
			onMouseEnter={
				handleHover
				// dispatch({ type: ACTION.setIsTransformed, payload: true })
			}
			// onMouseDown={
			//   () => setIsHover(false)
			//   // dispatch({ type: ACTION.setIsTransformed, payload: true })
			// }
			onMouseLeave={
				handleLeave
				// dispatch({ type: ACTION.setIsTransformed, payload: false })
			}
			marginbottom={marginbottom ? "true" : "false"}
		>
			<ImageWrapper>
				<CustomImageContainer
					height="100%"
					width="100%"
					src={vertical_card_image.src}
					borderRadius="10px"
				/>
				{item?.halal_tag_status && item?.is_halal ? (
					<FoodHalalHaram width={30} />
				) : (
					""
				)}

				<CustomOverLay hover={isHover} border_radius="10px">
					<QuickView
						quickViewHandleClick={quickViewHandleClick}
						// item={item}
						isHover={isHover}
						showAddtocart={showAddtocart}
						handleCart={handleAddToCardFromQuickview}
					/>
				</CustomOverLay>
				{!showAddtocart && (
					<CartWrapper>
						<AddWithIncrementDecrement
							onHover={isHover}
							handleCardHoverFromCartIconClick={
								handleCardHoverFromCartIconClick
							}
							setIsButtonClicked={setIsButtonClicked}
							setShowAddtocart={setShowAddtocart}
							setIsHover={setIsHover}
							verticalCard
						/>
					</CartWrapper>
				)}
			</ImageWrapper>
		</Wrapper>
	);
};

VerticalCardTypeTwo.propTypes = {};

export default VerticalCardTypeTwo;
