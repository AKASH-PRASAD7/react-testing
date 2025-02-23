import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../components/ProductImageGallery";
describe("ProductImage", () => {
  it("should dispaly nothing if imageUrl[] is empty", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should list of imageUrls", () => {
    const imageUrls: string[] = [
      "https://www.google.com",
      "https://www.github.com",
    ];
    render(<ProductImageGallery imageUrls={imageUrls} />);
    const images = screen.getAllByRole("img");
    images.forEach((img, idx) => {
      expect(images[idx]).toHaveAttribute("src", imageUrls[idx]);
    });
  });
});
