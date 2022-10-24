package esprit.microservice.donation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/donations")
public class DonationController {
    @Autowired
    DonationService donationService;
    @GetMapping
    public ResponseEntity<List<Donation>> getDonations() {
        try {
            List<Donation> donations = donationService.getDonations();
            if (donations.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(donations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

    }}
    @PostMapping
    public ResponseEntity<Donation> addDonation(@RequestBody  Donation donation) {
        try {
            Donation _donation = donationService.addDonation(donation);
            return new ResponseEntity<>(_donation, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping
    public ResponseEntity<Donation> updateDonation(@RequestBody Donation donation) {
        try {
            Donation _donation = donationService.updateDonation(donation);
            return new ResponseEntity<>(_donation, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDonation(@PathVariable("id") Long id) {
        try {
            donationService.deleteDonation(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Donation> getDonation(@PathVariable("id") Long id) {
        try {
            Donation _donation = donationService.getDonation(id);
            return new ResponseEntity<>(_donation, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
