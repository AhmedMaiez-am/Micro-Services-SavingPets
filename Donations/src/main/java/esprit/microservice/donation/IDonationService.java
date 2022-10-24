package esprit.microservice.donation;

import java.util.List;

public interface IDonationService {
    public Donation addDonation(Donation donation);
    public void deleteDonation(Long id);
    public Donation updateDonation(Donation donation);
    public Donation getDonation(Long id);
    public List<Donation> getDonations();
}
