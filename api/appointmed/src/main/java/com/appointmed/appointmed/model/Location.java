package com.appointmed.appointmed.model;

import com.appointmed.appointmed.constant.Accessibility;
import com.appointmed.appointmed.constant.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document("location")
public class Location {

    @Id
    private String address;
    private String name;
    private String openHours;
    private List<PaymentType> paymentTypes;
    private List<Accessibility> accessibility;
    private List<ContactInfo> contactInfo;
    private List<Visit> visits;


}
