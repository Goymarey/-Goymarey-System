import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { careerService } from '../../services/careerService';

const ApplicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplicationDetail();
  }, [id]);

  const fetchApplicationDetail = async () => {
    try {
      const data = await careerService.getApplicationById(id);
      setApplication(data);
    } catch (error) {
      console.error('Error fetching application details:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (newStatus) => {
    try {
      await careerService.updateApplicationStatus(id, newStatus);
      setApplication(prev => ({ ...prev, status: newStatus }));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading application details...</div>;
  }

  if (!application) {
    return <div className="text-center py-4">Application not found</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{application.position}</CardTitle>
        <Button
          onClick={() => navigate('/career')}
          variant="outline"
        >
          Back to List
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Applicant Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Name:</span> {application.applicant}</p>
                <p><span className="font-medium">Email:</span> {application.email}</p>
                <p><span className="font-medium">Phone:</span> {application.phone}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Application Details</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Status:</span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-sm ${
                    application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    application.status === 'reviewing' ? 'bg-blue-100 text-blue-800' :
                    application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {application.status}
                  </span>
                </p>
                <p><span className="font-medium">Applied Date:</span> {new Date(application.applicationDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Cover Letter</h3>
            <p className="text-gray-700 whitespace-pre-line">{application.coverLetter}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Resume</h3>
            <a
              href={application.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Resume
            </a>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Update Status</h3>
            <div className="flex gap-3">
              <Button
                onClick={() => handleStatusUpdate('reviewing')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Mark as Reviewing
              </Button>
              <Button
                onClick={() => handleStatusUpdate('accepted')}
                className="bg-green-600 hover:bg-green-700"
              >
                Accept
              </Button>
              <Button
                onClick={() => handleStatusUpdate('rejected')}
                className="bg-red-600 hover:bg-red-700"
              >
                Reject
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicationDetail;