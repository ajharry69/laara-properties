import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BASE_URL, {APP_ID} from "../../services/api";
import styles from "./propertydetails.module.css";
import {Link, useParams} from "react-router-dom";

const fetchPropertyDetails = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/stays/${id}`,
    {
      headers: { "x-app-id": APP_ID },
    }
  );
  return data;
};

const PropertyDetails = ()=> {
  const {id} = useParams()

  const { data, error, isLoading } = useQuery({
    queryKey: ["propertyDetails", id],
    queryFn: () => fetchPropertyDetails(id),
    enabled: !!id,
  });

  if (isLoading) return <div>Loading details...</div>;
  if (error) return <div>Error loading details: {error.message}</div>;

  return (
    <div>
      <h2>Property Details</h2>
      <Link to={'/'} >Go Back</Link>

      <div
        className={styles.property}
      >
        <h1>{data?.data.name}</h1>
        <p>{data?.data.description}</p>
        <h3>Address</h3>
        <p>
          {data?.data.address.street}, {data?.data.address.town},{" "}
          {data?.data.address.city}, {data?.data.address.country}
        </p>
        <p>
          <strong>Post Code:</strong> {data?.data.address.postCode}
        </p>
        <p>
          <strong>Physical Address:</strong>{" "}
          {data?.data.address.physicalAddress}
        </p>

        <h3>Languages Spoken</h3>

        <ul>
          {data?.data.propertyLanguages.map((language, index) => (
            <li key={index}>{language.language.name}</li>
          ))}
        </ul>

        <h3>Accessibility Features</h3>

        <ul>
        {data?.data.accessibilityFeatures.map((feature, index) => (
          <li key={index}>
            <strong>{feature.features.category}:</strong> {feature.features.feature}
          </li>
        ))}
      </ul>

      <h3>Guest Verification Method</h3>
      <p>{data?.data.guestVerificationMethod}</p>

      <h3>Parking</h3>
      <p>{data?.data.parking || 'No parking information available'}</p>

      <h3>Reviews</h3>
      {data?.data.reviews.length > 0 ? (
        <ul>
          {data?.data.reviews.map((review, index) => (
            <li key={index}>{review.content}</li>
          ))}
        </ul>
      ) : (
        <p>No reviews available</p>
      )}
      </div>
    </div>
  );
};

export default PropertyDetails;
