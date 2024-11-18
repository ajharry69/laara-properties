import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import { useState } from "react";
import BASE_URL, {APP_ID} from "../../services/api";
import styles from "./propertylist.module.css";

const fetchProperties = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/search/stays/filtered`,
    {
      headers: { "x-app-id": APP_ID },
    }
  );
  return data;
};

const PropertyList = () => {
  const {
    data: properties,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
  });

  const [selectedProperty, setSelectedProperty] = useState(null);

  if (isLoading) return <div>Loading properties...</div>;
  if (error) return <div>Error loading properties: {error.message}</div>;

  return (
    <div>
      <h1>Laara Group Property List</h1>
      <div
        className={styles.property_list}
      >
        {properties?.data?.map((property) => (
          <div
            key={property.id}
            className={styles.property_list_item}
            onClick={() => setSelectedProperty(property.id)}
          >
            <img
              src={
                property.propertyImages?.[0]?.images?.url ||
                "https://via.placeholder.com/300"
              }
              alt={property.name}
              className={styles.property_list_item_image}
            />
            <h2>{property.name}</h2>
            <p>{property.description}</p>
            <p>
              <strong>Location:</strong> {property.address.town},{" "}
              {property.address.city}, {property.address.country}
            </p>
            <p>
              <strong>Reviews:</strong>{" "}
              {property._count.reviews || "No reviews yet"}
            </p>
          </div>
        ))}
      </div>

      {selectedProperty && (
        <div className={styles.property_list_details}>
          <h2>Selected Property Details</h2>
          <PropertyDetails propertyId={selectedProperty} />
        </div>
      )}
    </div>
  );
};

export default PropertyList;
